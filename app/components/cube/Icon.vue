<template>
  <svg viewBox="0 0 140 140" :class="props.class">
    <g inkscape:label="Cube" transform="translate(19.337515,17.475988)">
      <g
        inkscape:label="Base"
        :style="{ display: props.mode === 'rotation' ? 'inline' : 'none' }"
      >
        <path
          style="
            display: inline;
            fill: var(--foreground);
            fill-opacity: 1;
            stroke: none;
            stroke-width: 2.5;
            stroke-linejoin: round;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          d="M 50.662485,2.2499999 97.427856,29.249999 V 83.249994 L 50.662485,110.25 3.8971143,83.249996 V 29.249999 Z"
          inkscape:label="Base"
        />
      </g>
      <g
        inkscape:label="Faces"
        :style="{ display: props.mode === 'color' ? 'inline' : 'none' }"
      >
        <path
          :style="{
            fill: props.colorUp,
            strokeWidth: 0.132292,
          }"
          d="M 50.662485,2.2499999 97.427856,29.249999 50.662485,56.249998 3.8971143,29.249999 Z"
          inkscape:label="Up"
        />
        <path
          :style="{
            fill: props.colorFront,
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 2.5,
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 97.427856,29.249999 V 83.249996 L 50.662485,110.25 V 56.249998 Z"
          inkscape:label="Front"
        />
        <path
          :style="{
            fill: props.colorLeft,
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 2.5,
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 3.8971143,29.249999 50.662485,56.249998 V 110.25 L 3.8971143,83.249996 Z"
          inkscape:label="Left"
        />
      </g>
      <g
        inkscape:label="2x2"
        :style="{ display: props.size === 2 ? 'inline' : 'none' }"
      >
        <g
          inkscape:label="Rotations"
          :style="{ display: props.mode === 'rotation' ? 'inline' : 'none' }"
        >
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 97.427856,83.249997 -3e-6,-26.999999 L 50.662483,83.25 3.8971072,56.250001 3.8971148,83.250003 50.662485,110.25 Z"
            inkscape:label="Y1"
          />
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 97.427856,56.249994 -4e-6,-26.999999 L 50.662483,56.249997 3.8971062,29.249998 3.8971138,56.25 50.662485,83.249996 Z"
            inkscape:label="Y0"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 50.662483,2.2499985 27.279799,15.749999 74.04517,42.749998 V 96.749999 L 97.427854,83.249995 V 29.249998 Z"
            inkscape:label="X1"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 27.279798,15.749998 3.897114,29.249999 50.662485,56.249998 V 110.25 L 74.045169,96.749995 V 42.749998 Z"
            inkscape:label="X0"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 74.045172,15.749998 97.427856,29.249999 50.662485,56.249998 V 110.25 L 27.279801,96.749995 V 42.749998 Z"
            inkscape:label="Z1"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 50.662485,2.2499999 74.045169,15.75 27.279798,42.749999 v 53.999997 l -23.3826837,-13.5 V 29.249999 Z"
            inkscape:label="Z0"
          />
        </g>
        <path
          :style="{
            display: 'inline',
            fill: 'none',
            fillOpacity: 1,
            stroke: props.colorBackground,
            strokeWidth: 2.5,
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 3.8971143,56.249998 50.662485,83.249996 97.427856,56.249998 M 74.045169,15.75 27.279798,42.749999 v 53.999997 m 0,-80.999996 46.765371,26.999999 v 53.999997"
          inkscape:label="Traces"
        />
      </g>
      <g
        inkscape:label="3x3"
        :style="{ display: props.size === 3 ? 'inline' : 'none' }"
      >
        <g
          inkscape:label="Rotations"
          :style="{ display: props.mode === 'rotation' ? 'inline' : 'none' }"
        >
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 2 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 97.427865,83.249997 -6e-6,-18 -46.765365,27.000009 -46.7653793,-26.999989 3.8e-6,18 L 50.6625,110.25001 Z"
            inkscape:label="Y2"
          />
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 97.427859,65.249997 -6e-6,-18 -46.765365,27.000009 -46.7653795,-26.999989 3.8e-6,18 46.7653817,26.999989 z"
            inkscape:label="Y1"
          />
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 97.427856,47.249988 -6e-6,-18 -46.765365,27.00001 -46.7653792,-26.999989 3.8e-6,18 46.7653814,26.999989 z"
            inkscape:label="Y0"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 2 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 50.662485,2.249999 35.074029,11.25 l 46.76537,27 V 92.250001 L 97.427856,83.250002 V 29.249999 Z"
            inkscape:label="X2"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 35.074028,11.249998 -15.588456,9.000001 46.76537,27 V 101.25 L 81.839399,92.250001 V 38.249998 Z"
            inkscape:label="X1"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 19.485571,20.249997 -15.5884563,9.000001 46.7653703,27 V 110.25 l 15.588457,-9 V 47.249997 Z"
            inkscape:label="X0"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 2 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 81.8394,20.249999 97.427856,29.25 l -46.76537,27 v 54 l -15.588457,-9 V 47.249999 Z"
            inkscape:label="Z2"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 66.250943,11.249999 81.839399,20.25 l -46.765371,27 v 54 L 19.485572,92.249996 V 38.249999 Z"
            inkscape:label="Z1"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 50.662485,2.2499999 66.250941,11.25 l -46.76537,27 V 92.249997 L 3.8971143,83.249996 V 29.249999 Z"
            inkscape:label="Z0"
          />
        </g>
        <path
          :style="{
            fill: 'none',
            fillOpacity: 1,
            stroke: props.colorBackground,
            strokeWidth: 2.5,
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 3.8971143,65.249998 50.662485,92.249997 97.427856,65.249998 m -93.5307417,-18 L 50.662485,74.249999 97.427856,47.249998 M 81.839397,20.249999 35.074029,47.249998 V 101.25 m 31.176912,-90 -46.76537,27 V 92.249997 M 35.074029,11.25 l 46.765368,27 V 92.249997 M 19.485571,20.249999 66.250941,47.249998 V 101.25"
          inkscape:label="Traces"
        />
      </g>
      <g
        inkscape:label="4x4"
        :style="{ display: props.size === 4 ? 'inline' : 'none' }"
      >
        <g
          inkscape:label="Rotations"
          :style="{ display: props.mode === 'rotation' ? 'inline' : 'none' }"
        >
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 3 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 3.8971155,69.749998 50.662485,96.75 97.427856,69.749998 v 13.5 L 50.662485,110.25 3.8971155,83.249998 Z"
            inkscape:label="Y3"
          />
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 2 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 3.897115,56.249999 46.76537,27.000002 46.765371,-27.000002 v 13.5 L 50.662485,96.750001 3.897115,69.749999 Z"
            inkscape:label="Y2"
          />
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 3.8971146,42.749998 50.662485,69.749997 97.427856,42.749998 v 13.5 L 50.662485,83.249996 3.8971146,56.249998 Z"
            inkscape:label="Y1"
          />
          <path
            :style="{
              display:
                props.axis === 'Y' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 3.8971143,29.249999 50.662485,56.249998 97.427856,29.249999 v 13.5 L 50.662485,69.749997 3.8971143,42.749999 Z"
            inkscape:label="Y0"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 3 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 50.662485,2.2500004 -11.691342,6.75 46.76537,26.9999986 V 90 L 97.427856,83.25 V 29.249999 Z"
            inkscape:label="X3"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 2 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 38.971142,8.9999999 27.2798,15.75 74.04517,42.749999 V 96.75 L 85.736513,90 V 35.999999 Z"
            inkscape:label="X2"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 27.2798,15.749999 -11.691342,6.75 46.76537,26.999999 V 103.5 L 74.045171,96.749999 V 42.749998 Z"
            inkscape:label="X1"
          />
          <path
            :style="{
              display:
                props.axis === 'X' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 15.588457,22.5 3.8971152,29.25 50.662485,56.249999 V 110.25 L 62.353828,103.5 V 49.499999 Z"
            inkscape:label="X0"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 3 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 85.736514,22.499999 11.691342,6.75 -46.76537,26.999999 V 110.25 L 38.971143,103.5 V 49.499998 Z"
            inkscape:label="Z3"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 2 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="m 74.045172,15.749999 11.691342,6.75 -46.76537,26.999999 V 103.5 L 27.279801,96.749995 V 42.749998 Z"
            inkscape:label="Z2"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 1 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 62.353827,9.0000003 74.045169,15.75 27.279799,42.749999 v 53.999997 l -11.691343,-6.75 V 35.999999 Z"
            inkscape:label="Z1"
          />
          <path
            :style="{
              display:
                props.axis === 'Z' && props.layer === 0 ? 'inline' : 'none',
              fill: 'var(--muted-foreground)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 2.5,
              strokeLinejoin: 'round',
              strokeDasharray: 'none',
              strokeOpacity: 1,
            }"
            d="M 50.662485,2.2499999 62.353827,8.9999996 15.588457,35.999999 v 53.999997 l -11.6913427,-6.75 V 29.249999 Z"
            inkscape:label="Z0"
          />
        </g>
        <path
          :style="{
            fill: 'none',
            fillOpacity: 1,
            stroke: props.colorBackground,
            strokeWidth: 2.5,
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 3.8971143,69.749997 50.662485,96.749996 97.427856,69.749997 M 3.8971143,56.249998 50.662485,83.249996 97.427856,56.249998 M 3.8971143,42.749999 50.662485,69.749997 97.427856,42.749999 m -11.691342,-20.25 -46.765371,26.999999 V 103.5 M 27.279798,96.749996 V 42.749999 L 74.045169,15.75 M 62.353827,8.9999996 15.588457,35.999999 v 53.999997 m 0,-67.499997 46.76537,26.999999 V 103.5 M 27.279798,15.75 74.045169,42.749999 V 96.749996 M 38.971143,8.9999996 85.736514,35.999999 v 53.999997"
          inkscape:label="Traces"
        />
      </g>
      <g inkscape:label="Path">
        <path
          :style="{
            fill: 'none',
            fillOpacity: 1,
            stroke: props.colorBackground,
            strokeWidth: 2.5,
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 50.662485,56.249998 97.427856,29.249999 V 83.249994 L 50.662485,110.25 Z M 3.8971143,29.249999 V 83.249996 L 50.662485,110.25 V 56.249998 Z M 50.662485,2.2499999 97.427856,29.249999 50.662485,56.249998 3.8971143,29.249999 Z"
          inkscape:label="Path"
        />
      </g>
      <g
        inkscape:label="Rotation arrows"
        transform="translate(-6.3375148,-0.75003612)"
        :style="{ display: props.mode === 'rotation' ? 'inline' : 'none' }"
      >
        <path
          :style="{
            display:
              props.axis === 'Z' && props.rotate === 'backward'
                ? 'inline'
                : 'none',
            fill: 'none',
            fillOpacity: 1,
            stroke: 'var(--destructive-foreground)',
            strokeWidth: 3.71894,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 95.378123,54.384191 83.367867,51.997042 83.783601,40.995992 M 65.976089,82.120485 a 23.429349,40.580821 30 0 0 6.738028,30.666595 23.429349,40.580821 30 0 0 40.580823,-23.429343 23.429349,40.580821 30 0 0 -1e-5,-46.85869 v 0 A 23.429349,40.580821 30 0 0 83.367868,51.99704"
          inkscape:label="RotateZBack"
          inkscape:transform-center-y="20.787222"
          inkscape:transform-center-x="-36.004525"
        />
        <path
          :style="{
            display:
              props.axis === 'Z' && props.rotate === 'forward'
                ? 'inline'
                : 'none',
            fill: 'none',
            fillOpacity: 1,
            stroke: 'var(--destructive-foreground)',
            strokeWidth: 3.71894,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="m 74.048549,91.328097 -8.07246,-9.207612 -9.319322,5.860562 m 26.7111,-35.984005 a 23.429349,40.580821 30 0 1 29.927063,-9.497995 23.429349,40.580821 30 0 1 1e-5,46.858695 23.429349,40.580821 30 0 1 -40.580823,23.429338 v 0 A 23.429349,40.580821 30 0 1 65.976088,82.120487"
          inkscape:label="RotateZ"
          inkscape:transform-center-y="20.787223"
          inkscape:transform-center-x="-32.178134"
        />
        <path
          :style="{
            display:
              props.axis === 'Y' && props.rotate === 'backward'
                ? 'inline'
                : 'none',
            fill: 'none',
            fillOpacity: 1,
            stroke: 'var(--destructive-foreground)',
            strokeWidth: 3.71894,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 78.329574,24.855239 74.391778,36.45 84.126834,41.590489 M 39.608222,36.45 A 40.580821,23.429349 0 0 1 16.419183,15.281397 40.580821,23.429349 0 0 1 57.000003,-8.1479522 40.580821,23.429349 0 0 1 97.580817,15.281397 v 0 A 40.580821,23.429349 0 0 1 74.39178,36.45"
          inkscape:label="RotateYBack"
        />
        <path
          :style="{
            display:
              props.axis === 'Y' && props.rotate === 'forward'
                ? 'inline'
                : 'none',
            fill: 'none',
            fillOpacity: 1,
            stroke: 'var(--destructive-foreground)',
            strokeWidth: 3.71894,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 35.670426,24.855239 39.608222,36.45 29.873166,41.590489 M 74.391778,36.45 A 40.580821,23.429349 0 0 0 97.580817,15.281397 40.580821,23.429349 0 0 0 56.999997,-8.1479521 40.580821,23.429349 0 0 0 16.419183,15.281397 v 0 A 40.580821,23.429349 0 0 0 39.60822,36.45"
          inkscape:label="RotateY"
          inkscape:transform-center-y="-40.134574"
        />
        <path
          :style="{
            display:
              props.axis === 'X' && props.rotate === 'backward'
                ? 'inline'
                : 'none',
            fill: 'none',
            fillOpacity: 1,
            stroke: 'var(--destructive-foreground)',
            strokeWidth: 3.71894,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="M 18.621877,54.384191 30.632133,51.997042 30.216399,40.995992 M 48.023911,82.120485 A 40.580821,23.429349 60 0 1 41.285883,112.78708 40.580821,23.429349 60 0 1 0.70506108,89.357737 a 40.580821,23.429349 60 0 1 4.51e-6,-46.85869 v 0 A 40.580821,23.429349 60 0 1 30.632132,51.99704"
          inkscape:label="RotateXBack"
          inkscape:transform-center-y="20.787221"
          inkscape:transform-center-x="36.004526"
        />
        <path
          :style="{
            display:
              props.axis === 'X' && props.rotate === 'forward'
                ? 'inline'
                : 'none',
            fill: 'none',
            fillOpacity: 1,
            stroke: 'var(--destructive-foreground)',
            strokeWidth: 3.71894,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }"
          d="m 39.951451,91.328097 8.07246,-9.207612 9.319322,5.860562 M 30.632133,51.997042 A 40.580821,23.429349 60 0 0 0.70506559,42.499047 40.580821,23.429349 60 0 0 0.70506408,89.357742 40.580821,23.429349 60 0 0 41.285883,112.78708 v 0 a 40.580821,23.429349 60 0 0 6.738029,-30.666593"
          inkscape:label="RotateX"
          inkscape:transform-center-y="20.787221"
          inkscape:transform-center-x="32.178133"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    size?: number
    mode?: 'color' | 'rotation'
    colorBackground?: string
    colorUp?: string
    colorFront?: string
    colorLeft?: string
    axis?: 'X' | 'Y' | 'Z'
    layer?: 0 | 1 | 2 | 3
    rotate?: 'forward' | 'backward'
  }>(),
  {
    size: 3,
    mode: 'color',
    colorBackground: CUBE_DEFAULT_COLORS.baseColor,
    colorUp: CUBE_DEFAULT_COLORS.upColor,
    colorFront: CUBE_DEFAULT_COLORS.frontColor,
    colorLeft: CUBE_DEFAULT_COLORS.leftColor,
    rotate: 'forward',
  }
)
</script>
