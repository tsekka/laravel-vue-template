<?php

namespace App\Traits\SEO;

trait ResourceHasSeoFields
{

    /**
     * Append SEO fields to the resource.
     *
     * @see https://www.digitalocean.com/community/tutorials/vuejs-vue-seo-tips
     * @param array $fields
     * @return array
     */
    public function appendSeoFields(array $fields): array
    {

        // Meta fields with name
        $meta = [];
        foreach (['description' => $this->meta_description] as $name => $content) {
            if ($content || $content === 0) {
                $meta[] = [
                    'name' => $name,
                    'content' => $content,
                ];
            }
        }

        // Open graph tags
        $openGraph = method_exists($this->resource, 'openGraphMetaTags') ? $this->openGraphMetaTags() : ['openGraphMetaTags' => []];
        foreach ($openGraph  as $property => $content) {
            if ($content || $content === 0) {
                $meta[] = [
                    'property' => $property,
                    'content' => $content,
                ];
            }
        }

        // Document head content
        $fields['head'] = [
            'title' => ($this->meta_title ?? $this->title) . config('settings.meta_brand'),
            'meta' => $meta,
        ];

        //  Canonical link
        if ($this->canonical_url) {
            $link = ['rel' => 'canonical', 'href' => $this->canonical_url];
            $fields['head']['link'] = [$link];
        }

        return $fields;
    }
}
