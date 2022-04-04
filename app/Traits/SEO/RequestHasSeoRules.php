<?php

namespace App\Traits\SEO;

trait RequestHasSeoRules
{

    /**
     * Append SEO fields to the validation rules.
     *
     * @param array $rules
     * @return array
     */
    public function appendSeoRules(array $rules): array
    {
        return array_merge([
            'meta_title' => 'nullable|string|max:100',
            'meta_description' => 'nullable|string|max:250',
        ], $rules);
    }
}
