var gdjs;(function(i){i.PixiFiltersTools.registerFilterCreator("Noise",new class extends i.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(e,r){return new PIXI.NoiseFilter}updatePreRender(e,r){}updateDoubleParameter(e,r,t){const a=e;r==="noise"&&(a.noise=i.PixiFiltersTools.clampValue(t,0,1))}getDoubleParameter(e,r){const t=e;return r==="noise"?t.noise:0}updateStringParameter(e,r,t){}updateColorParameter(e,r,t){}getColorParameter(e,r){return 0}updateBooleanParameter(e,r,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=noise-pixi-filter.js.map