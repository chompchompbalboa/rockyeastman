<div class="section title-section">
    <div class="container">
        <div class="w-row">
            <div class="column w-col w-col-10">
                <h1 class="page-title">
                    {{ $splash->header }}
                </h1>
                <h5 class="page-subtitle">
                    @foreach($splash->text as $text)
                        {{ $text }}
                        @if(!$loop->last)
                            <br />
                        @endif
                    @endforeach
                </h5>
                <div class="separator"></div>
            </div>
            <div class="column w-col w-col-2"></div>
        </div>
    </div>
</div>