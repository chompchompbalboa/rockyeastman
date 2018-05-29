@php
    $block = $data->blocks->callToAction;
@endphp

<div class="call-to-action section">
    <div class="container">
        <div class="column-fullwidth">
            <div class="separator"></div>
            <h6>
                {{ $block->call }}
            </h6>
            <h3>
                {{ $block->header }}
            </h3>
            <h5>
                {{ $block->text }}
            </h5>
            <a class="button w-button" data-ix="fade-content-out" href="{{ $urlPath.$block->link->href }}">
                {{ $block->link->text }}
            </a>
        </div>
    </div>
</div>