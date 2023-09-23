<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# toWord

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an unsigned 32-bit integer corresponding to the [IEEE 754][ieee754] binary representation of a [single-precision floating-point number][ieee754].



<section class="usage">

## Usage

```javascript
import toWordf from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@esm/index.mjs';
```

#### toWordf( x )

Returns an unsigned 32-bit `integer` corresponding to the [IEEE 754][ieee754] binary representation of a [single-precision floating-point number][ieee754].

```javascript
import float64ToFloat32 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs';

var f32 = float64ToFloat32( 1.337 );
// returns 1.3370000123977661

var w = toWordf( f32 ); // => 0 01111111 01010110010001011010001
// returns 1068180177
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The equivalent of this function in C/C++,

    ```c
    unsigned int toWordf(float x) {
        return *(unsigned int*)&x;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import float64ToFloat32 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import toWordf from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@esm/index.mjs';

var word;
var f64;
var f32;
var i;

// Convert single-precision floating-point numbers to integers representing the binary literal...
for ( i = 0; i < 1000; i++ ) {
    f64 = (randu()*100.0) - 50.0;
    f32 = float64ToFloat32( f64 );
    word = toWordf( f32 );
    console.log( 'float64: %d => float32: %d => word: %d', f64, f32, word );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-to-word.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-to-word

[test-image]: https://github.com/stdlib-js/number-float32-base-to-word/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/number-float32-base-to-word/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-to-word/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-to-word?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-to-word.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-to-word/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base-to-word/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float32-base-to-word/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float32-base-to-word/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float32-base-to-word/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-to-word/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
