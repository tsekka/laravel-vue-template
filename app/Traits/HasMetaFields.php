<?php

namespace App\Traits;

trait HasMetaFields
{

    // meta_title
    public function setMetaTitleAttribute($value): void
    {
        if ($this->id) $this->setMeta('meta_title', $value);
    }
    public function getMetaTitleAttribute(): ?string
    {
        return $this->getMeta('meta_title');
    }

    // meta_description
    public function setMetaDescriptionAttribute($value): void
    {
        if ($this->id) $this->setMeta('meta_description', $value);
    }
    public function getMetaDescriptionAttribute(): ?string
    {
        return $this->getMeta('meta_description');
    }

    // dark_navbar
    // public function setDarkNavbarAttribute($value): void
    // {
    //     if ($this->id) $this->setMeta('dark_navbar', $value);
    // }
    // public function getDarkNavbarAttribute(): ?string
    // {
    //     return $this->getMeta('dark_navbar');
    // }

    // show_top_bar
    // public function setShowTopBarAttribute($value): void
    // {
    //     if ($this->id) $this->setMeta('show_top_bar', $value);
    // }
    // public function getShowTopBarAttribute(): ?string
    // {
    //     return $this->getMeta('show_top_bar');
    // }

    // top_bar_content
    // public function setTopBarContentAttribute($value): void
    // {
    //     if ($this->id) $this->setMeta('top_bar_content', $value);
    // }
    // public function getTopBarContentAttribute(): ?string
    // {
    //     return $this->getMeta('top_bar_content');
    // }
}
