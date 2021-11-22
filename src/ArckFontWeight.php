<?php

namespace Arckinteractive\StatamicBardFontWeight;

use ProseMirrorToHtml\Marks\Mark;

class ArckFontWeight extends Mark
{
    protected $markType = 'ArckFontWeight';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        return [
            [
                'tag'   => 'span',
                'attrs' => [
                    'style' => 'font-weight: ' . str_replace('afw-', '', $this->mark->attrs->key) . ';'
                ],
            ],
        ];
    }
}