<?php

namespace Arckinteractive\StatamicBardFontWeight;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class ArckFontWeight extends Mark
{
    public static $name = 'ArckFontWeight';
    protected $tagName = 'span';

    public function renderHTML($mark, $attributes = [])
    {
        return [
            [
                'span',
                HTML::mergeAttributes([
                    'class' => 'arck-font-weight',
                    'style' => 'font-weight: ' . str_replace('afw-', '', $mark->attrs->key) . ';'
                ], $attributes),
                0
            ],
        ];
    }
}
