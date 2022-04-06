<?php

namespace App\Overrides\Spatie\TypescriptTransformers\Formatters;

use Symfony\Component\Process\Process;
use Spatie\TypeScriptTransformer\Formatters\Formatter;
use Symfony\Component\Process\Exception\ProcessFailedException;

class PrettierFormatter implements Formatter
{
    public function format(string $file): void
    {
        $process = new Process(['prettier', '--write', '--tab-width=2', $file]);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
    }
}
