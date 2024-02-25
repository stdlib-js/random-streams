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

# Pseudorandom Number Generator Streams

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom number generator (PRNG) streams.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-streams@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/random-streams/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-streams@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing pseudorandom number generator (PRNG) streams.

```javascript
var streams = ns;
// returns {...}
```

The namespace contains the following functions for creating readable pseudorandom number generator streams:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( a, b[, options] )`][@stdlib/random/streams/arcsine]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( p[, options] )`][@stdlib/random/streams/bernoulli]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( alpha, beta[, options] )`][@stdlib/random/streams/beta]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( alpha, beta[, options] )`][@stdlib/random/streams/betaprime]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`binomial( n, p[, options] )`][@stdlib/random/streams/binomial]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`boxMuller( [options] )`][@stdlib/random/streams/box-muller]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="signature">[`cauchy( x0, gamma[, options] )`][@stdlib/random/streams/cauchy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( k[, options] )`][@stdlib/random/streams/chi]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( k[, options] )`][@stdlib/random/streams/chisquare]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( mu, s[, options] )`][@stdlib/random/streams/cosine]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( a, b[, options] )`][@stdlib/random/streams/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( k, lambda[, options] )`][@stdlib/random/streams/erlang]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( lambda[, options] )`][@stdlib/random/streams/exponential]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( d1, d2[, options] )`][@stdlib/random/streams/f]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( alpha, s, m[, options] )`][@stdlib/random/streams/frechet]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( alpha, beta[, options] )`][@stdlib/random/streams/gamma]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( p[, options] )`][@stdlib/random/streams/geometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( mu, beta[, options] )`][@stdlib/random/streams/gumbel]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( N, K, n[, options] )`][@stdlib/random/streams/hypergeometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`improvedZiggurat( [options] )`][@stdlib/random/streams/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>
-   <span class="signature">[`invgamma( alpha, beta[, options] )`][@stdlib/random/streams/invgamma]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( a, b[, options] )`][@stdlib/random/streams/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace( mu, b[, options] )`][@stdlib/random/streams/laplace]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( mu, c[, options] )`][@stdlib/random/streams/levy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( mu, s[, options] )`][@stdlib/random/streams/logistic]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( mu, sigma[, options] )`][@stdlib/random/streams/lognormal]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( [options] )`][@stdlib/random/streams/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create a readable stream for a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( [options] )`][@stdlib/random/streams/minstd]</span><span class="delimiter">: </span><span class="description">create a readable stream for a linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="signature">[`mt19937( [options] )`][@stdlib/random/streams/mt19937]</span><span class="delimiter">: </span><span class="description">create a readable stream for a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( r, p[, options] )`][@stdlib/random/streams/negative-binomial]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( mu, sigma[, options] )`][@stdlib/random/streams/normal]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( alpha, beta[, options] )`][@stdlib/random/streams/pareto-type1]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( lambda[, options] )`][@stdlib/random/streams/poisson]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randi( [options] )`][@stdlib/random/streams/randi]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers having integer values.</span>
-   <span class="signature">[`randn( [options] )`][@stdlib/random/streams/randn]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="signature">[`randu( [options] )`][@stdlib/random/streams/randu]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( sigma[, options] )`][@stdlib/random/streams/rayleigh]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( v[, options] )`][@stdlib/random/streams/t]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Student's t distribution.</span>
-   <span class="signature">[`triangular( a, b, c[, options] )`][@stdlib/random/streams/triangular]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( a, b[, options] )`][@stdlib/random/streams/uniform]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a uniform distribution.</span>
-   <span class="signature">[`weibull( k, lambda[, options] )`][@stdlib/random/streams/weibull]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-streams@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-streams.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-streams

[test-image]: https://github.com/stdlib-js/random-streams/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/random-streams/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-streams/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-streams?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-streams.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-streams/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-streams/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-streams/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-streams/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-streams/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-streams/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-streams/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-streams/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-streams/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/streams/arcsine]: https://github.com/stdlib-js/random-streams-arcsine/tree/umd

[@stdlib/random/streams/bernoulli]: https://github.com/stdlib-js/random-streams-bernoulli/tree/umd

[@stdlib/random/streams/beta]: https://github.com/stdlib-js/random-streams-beta/tree/umd

[@stdlib/random/streams/betaprime]: https://github.com/stdlib-js/random-streams-betaprime/tree/umd

[@stdlib/random/streams/binomial]: https://github.com/stdlib-js/random-streams-binomial/tree/umd

[@stdlib/random/streams/box-muller]: https://github.com/stdlib-js/random-streams-box-muller/tree/umd

[@stdlib/random/streams/cauchy]: https://github.com/stdlib-js/random-streams-cauchy/tree/umd

[@stdlib/random/streams/chi]: https://github.com/stdlib-js/random-streams-chi/tree/umd

[@stdlib/random/streams/chisquare]: https://github.com/stdlib-js/random-streams-chisquare/tree/umd

[@stdlib/random/streams/cosine]: https://github.com/stdlib-js/random-streams-cosine/tree/umd

[@stdlib/random/streams/discrete-uniform]: https://github.com/stdlib-js/random-streams-discrete-uniform/tree/umd

[@stdlib/random/streams/erlang]: https://github.com/stdlib-js/random-streams-erlang/tree/umd

[@stdlib/random/streams/exponential]: https://github.com/stdlib-js/random-streams-exponential/tree/umd

[@stdlib/random/streams/f]: https://github.com/stdlib-js/random-streams-f/tree/umd

[@stdlib/random/streams/frechet]: https://github.com/stdlib-js/random-streams-frechet/tree/umd

[@stdlib/random/streams/gamma]: https://github.com/stdlib-js/random-streams-gamma/tree/umd

[@stdlib/random/streams/geometric]: https://github.com/stdlib-js/random-streams-geometric/tree/umd

[@stdlib/random/streams/gumbel]: https://github.com/stdlib-js/random-streams-gumbel/tree/umd

[@stdlib/random/streams/hypergeometric]: https://github.com/stdlib-js/random-streams-hypergeometric/tree/umd

[@stdlib/random/streams/improved-ziggurat]: https://github.com/stdlib-js/random-streams-improved-ziggurat/tree/umd

[@stdlib/random/streams/invgamma]: https://github.com/stdlib-js/random-streams-invgamma/tree/umd

[@stdlib/random/streams/kumaraswamy]: https://github.com/stdlib-js/random-streams-kumaraswamy/tree/umd

[@stdlib/random/streams/laplace]: https://github.com/stdlib-js/random-streams-laplace/tree/umd

[@stdlib/random/streams/levy]: https://github.com/stdlib-js/random-streams-levy/tree/umd

[@stdlib/random/streams/logistic]: https://github.com/stdlib-js/random-streams-logistic/tree/umd

[@stdlib/random/streams/lognormal]: https://github.com/stdlib-js/random-streams-lognormal/tree/umd

[@stdlib/random/streams/minstd-shuffle]: https://github.com/stdlib-js/random-streams-minstd-shuffle/tree/umd

[@stdlib/random/streams/minstd]: https://github.com/stdlib-js/random-streams-minstd/tree/umd

[@stdlib/random/streams/mt19937]: https://github.com/stdlib-js/random-streams-mt19937/tree/umd

[@stdlib/random/streams/negative-binomial]: https://github.com/stdlib-js/random-streams-negative-binomial/tree/umd

[@stdlib/random/streams/normal]: https://github.com/stdlib-js/random-streams-normal/tree/umd

[@stdlib/random/streams/pareto-type1]: https://github.com/stdlib-js/random-streams-pareto-type1/tree/umd

[@stdlib/random/streams/poisson]: https://github.com/stdlib-js/random-streams-poisson/tree/umd

[@stdlib/random/streams/randi]: https://github.com/stdlib-js/random-streams-randi/tree/umd

[@stdlib/random/streams/randn]: https://github.com/stdlib-js/random-streams-randn/tree/umd

[@stdlib/random/streams/randu]: https://github.com/stdlib-js/random-streams-randu/tree/umd

[@stdlib/random/streams/rayleigh]: https://github.com/stdlib-js/random-streams-rayleigh/tree/umd

[@stdlib/random/streams/t]: https://github.com/stdlib-js/random-streams-t/tree/umd

[@stdlib/random/streams/triangular]: https://github.com/stdlib-js/random-streams-triangular/tree/umd

[@stdlib/random/streams/uniform]: https://github.com/stdlib-js/random-streams-uniform/tree/umd

[@stdlib/random/streams/weibull]: https://github.com/stdlib-js/random-streams-weibull/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
