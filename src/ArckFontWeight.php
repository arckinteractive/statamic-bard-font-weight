<?php

namespace Arckinteractive\StatamicBardFontWeight;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class ArckFontWeight extends Mark
{
    public static $name = 'ArckFontWeight';

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return [
            'span',
            HTML::mergeAttributes(
                [
                    'class' => 'arck-font-weight',
                    'style' => 'font-weight: ' . str_replace('afw-', '', $mark->attrs->key) . ';',
                ],
                $HTMLAttributes,
            ),
            0
        ];
    }
}