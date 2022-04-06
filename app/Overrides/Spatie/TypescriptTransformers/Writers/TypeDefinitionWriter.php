<?php

namespace App\Overrides\Spatie\TypescriptTransformers\Writers;

use Spatie\TypeScriptTransformer\Writers\Writer;
use Spatie\TypeScriptTransformer\Structures\TransformedType;
use Spatie\TypeScriptTransformer\Structures\TypesCollection;
use Spatie\TypeScriptTransformer\Actions\ReplaceSymbolsInCollectionAction;

class TypeDefinitionWriter implements Writer
{

    /**
     * Types for classes under these should not be prefixes.
     * 
     * Eg. when we only generate types for models and modelResources, 
     * then there is no need have them prefixed.
     * 
     * @var array
     */
    public array $skippedNamespaces = ['App.Http.Resources', 'App.Actions', 'App.Models'];

    public function format(TypesCollection $collection): string
    {
        (new ReplaceSymbolsInCollectionAction())->execute($collection);

        [$namespaces, $rootTypes] = $this->groupByNamespace($collection);

        $output = '/* This file is generated using `php artisan typescript:transform` command. */' . PHP_EOL . PHP_EOL;


        foreach ($namespaces as $namespace => $types) {
            asort($types);

            $shouldBeNamespaced = !in_array($namespace, $this->skippedNamespaces);

            if ($shouldBeNamespaced)  $output .= "declare namespace {$namespace} {" . PHP_EOL;

            $output .= join(PHP_EOL, array_map(
                fn (TransformedType $type) => "export {$type->toString()};",
                $types
            ));
            $output .= PHP_EOL . PHP_EOL;

            if ($shouldBeNamespaced) $output .= PHP_EOL . "}" . PHP_EOL;
        }

        $output .= join(PHP_EOL, array_map(
            fn (TransformedType $type) => "export {$type->toString()};",
            $rootTypes
        ));

        return $output;
    }

    public function replacesSymbolsWithFullyQualifiedIdentifiers(): bool
    {
        return true;
    }

    protected function groupByNamespace(TypesCollection $collection): array
    {
        $namespaces = [];
        $rootTypes = [];

        foreach ($collection as $type) {
            if ($type->isInline) {
                continue;
            }

            $namespace = str_replace('\\', '.', $type->reflection->getNamespaceName());

            if (empty($namespace)) {
                $rootTypes[] = $type;

                continue;
            }

            array_key_exists($namespace, $namespaces)
                ? $namespaces[$namespace][] = $type
                : $namespaces[$namespace] = [$type];
        }

        ksort($namespaces);

        return [$namespaces, $rootTypes];
    }
}
