/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arcsine = require( '@stdlib/random-streams-arcsine' );
import bernoulli = require( '@stdlib/random-streams-bernoulli' );
import beta = require( '@stdlib/random-streams-beta' );
import betaprime = require( '@stdlib/random-streams-betaprime' );
import binomial = require( '@stdlib/random-streams-binomial' );
import boxMuller = require( '@stdlib/random-streams-box-muller' );
import cauchy = require( '@stdlib/random-streams-cauchy' );
import chi = require( '@stdlib/random-streams-chi' );
import chisquare = require( '@stdlib/random-streams-chisquare' );
import cosine = require( '@stdlib/random-streams-cosine' );
import discreteUniform = require( '@stdlib/random-streams-discrete-uniform' );
import erlang = require( '@stdlib/random-streams-erlang' );
import exponential = require( '@stdlib/random-streams-exponential' );
import f = require( '@stdlib/random-streams-f' );
import frechet = require( '@stdlib/random-streams-frechet' );
import gamma = require( '@stdlib/random-streams-gamma' );
import geometric = require( '@stdlib/random-streams-geometric' );
import gumbel = require( '@stdlib/random-streams-gumbel' );
import hypergeometric = require( '@stdlib/random-streams-hypergeometric' );
import improvedZiggurat = require( '@stdlib/random-streams-improved-ziggurat' );
import invgamma = require( '@stdlib/random-streams-invgamma' );
import kumaraswamy = require( '@stdlib/random-streams-kumaraswamy' );
import laplace = require( '@stdlib/random-streams-laplace' );
import levy = require( '@stdlib/random-streams-levy' );
import logistic = require( '@stdlib/random-streams-logistic' );
import lognormal = require( '@stdlib/random-streams-lognormal' );
import minstd = require( '@stdlib/random-streams-minstd' );
import minstdShuffle = require( '@stdlib/random-streams-minstd-shuffle' );
import mt19937 = require( '@stdlib/random-streams-mt19937' );
import negativeBinomial = require( '@stdlib/random-streams-negative-binomial' );
import normal = require( '@stdlib/random-streams-normal' );
import pareto1 = require( '@stdlib/random-streams-pareto-type1' );
import poisson = require( '@stdlib/random-streams-poisson' );
import randi = require( '@stdlib/random-streams-randi' );
import randn = require( '@stdlib/random-streams-randn' );
import randu = require( '@stdlib/random-streams-randu' );
import rayleigh = require( '@stdlib/random-streams-rayleigh' );
import t = require( '@stdlib/random-streams-t' );
import triangular = require( '@stdlib/random-streams-triangular' );
import uniform = require( '@stdlib/random-streams-uniform' );
import weibull = require( '@stdlib/random-streams-weibull' );

/**
* Interface describing the `streams` namespace.
*/
interface Namespace {
	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from an arcsine distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - stream options
	* @throws `a` must be less than `b`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.arcsine( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.arcsine;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.arcsine.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.arcsine.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.arcsine.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	arcsine: typeof arcsine;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Bernoulli distribution.
	*
	* @param p - success probability
	* @param options - stream options
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.bernoulli( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.bernoulli;
	* var stream = new RandomStream( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.bernoulli.objectMode( 0.7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.bernoulli.factory( 0.7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.bernoulli.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 0.7 ) );
	* }
	*/
	bernoulli: typeof bernoulli;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a beta distribution.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @param options - stream options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.beta( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.beta;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.beta.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.beta.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.beta.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	beta: typeof beta;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a beta prime distribution.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @param options - stream options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.betaprime( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.betaprime;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.betaprime.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.betaprime.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.betaprime.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	betaprime: typeof betaprime;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a binomial distribution.
	*
	* @param n - number of trials
	* @param p - success probability
	* @param options - stream options
	* @throws `n` must be a positive integer
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.binomial( 20, 0.3, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.binomial;
	* var stream = new RandomStream( 20, 0.3, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.binomial.objectMode( 20, 0.3, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.binomial.factory( 20, 0.3, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.binomial.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 20, 0.3 ) );
	* }
	*/
	binomial: typeof binomial;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.boxMuller;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.boxMuller( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.boxMuller.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.boxMuller.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	boxMuller: typeof boxMuller;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Cauchy distribution.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @param options - stream options
	* @throws `gamma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.cauchy( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.cauchy;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.cauchy.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.cauchy.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.cauchy.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	cauchy: typeof cauchy;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a chi distribution.
	*
	* @param k - degrees of freedom
	* @param options - stream options
	* @throws `k` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.chi( 2.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.chi;
	* var stream = new RandomStream( 2.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.chi.objectMode( 2.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.chi.factory( 2.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.chi.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0 ) );
	* }
	*/
	chi: typeof chi;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a chi-square distribution.
	*
	* @param k - degrees of freedom
	* @param options - stream options
	* @throws `k` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.chisquare( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.chisquare;
	* var stream = new RandomStream( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.chisquare.objectMode( 0.7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.chisquare.factory( 0.7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.chisquare.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 0.7 ) );
	* }
	*/
	chisquare: typeof chisquare;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a raised cosine distribution.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @param options - stream options
	* @throws `s` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.cosine( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.cosine;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.cosine.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.cosine.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.cosine.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	cosine: typeof cosine;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a discrete uniform distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - stream options
	* @throws `a` must be an integer
	* @throws `b` must be an integer
	* @throws `a` must be less than or equal to `b`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.discreteUniform( 2, 5, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.discreteUniform;
	* var stream = new RandomStream( 2, 5, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.discreteUniform.objectMode( 2, 5, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.discreteUniform.factory( 2, 5, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.discreteUniform.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2, 5 ) );
	* }
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from an Erlang distribution.
	*
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @param options - stream options
	* @throws `k` must be a positive integer
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.erlang( 2, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.erlang;
	* var stream = new RandomStream( 2, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.erlang.objectMode( 2, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.erlang.factory( 2, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.erlang.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2, 5.0 ) );
	* }
	*/
	erlang: typeof erlang;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from an exponential distribution.
	*
	* @param lambda - rate parameter
	* @param options - stream options
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.exponential( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.exponential;
	* var stream = new RandomStream( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.exponential.objectMode( 0.7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.exponential.factory( 0.7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.exponential.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 0.7 ) );
	* }
	*/
	exponential: typeof exponential;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from an F distribution.
	*
	* @param d1 - degrees of freedom
	* @param d2 - degrees of freedom
	* @param options - stream options
	* @throws `d1` must be a positive number
	* @throws `d2` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* ns.function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.f( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* ns.function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.f;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* ns.function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.f.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': ns.false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.f.ns.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* ns.for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': ns.false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.f.ns.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* ns.for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	f: typeof f;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Fréchet distribution.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @param options - stream options
	* @throws `alpha` must be a positive number
	* @throws `s` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.frechet( 2.0, 5.0, 3.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.frechet;
	* var stream = new RandomStream( 2.0, 5.0, 3.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.frechet.objectMode( 2.0, 5.0, 3.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.frechet.factory( 2.0, 5.0, 3.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.frechet.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0, 3.0 ) );
	* }
	*/
	frechet: typeof frechet;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a gamma distribution.
	*
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @param options - stream options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.gamma( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.gamma;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.gamma.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.gamma.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.gamma.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	gamma: typeof gamma;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a geometric distribution.
	*
	* @param p - success probability
	* @param options - stream options
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.geometric( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.geometric;
	* var stream = new RandomStream( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.geometric.objectMode( 0.7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.geometric.factory( 0.7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.geometric.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 0.7 ) );
	* }
	*/
	geometric: typeof geometric;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Gumbel distribution.
	*
	* @param mu - mean
	* @param beta - scale parameter
	* @param options - stream options
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.gumbel( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.gumbel;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.gumbel.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.gumbel.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.gumbel.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	gumbel: typeof gumbel;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param options - stream options
	* @throws `N` must be a nonnegative integer
	* @throws `K` must be a nonnegative integer
	* @throws `n` must be a nonnegative integer
	* @throws `n` must be less than or equal to `N`
	* @throws `K` must be less than or equal to `N`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.hypergeometric( 20, 10, 7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.hypergeometric;
	* var stream = new RandomStream( 20, 10, 7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.hypergeometric.objectMode( 20, 10, 7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.hypergeometric.factory( 20, 10, 7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.hypergeometric.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 20, 10, 7 ) );
	* }
	*/
	hypergeometric: typeof hypergeometric;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.improvedZiggurat;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.improvedZiggurat( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.improvedZiggurat.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.improvedZiggurat.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	improvedZiggurat: typeof improvedZiggurat;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from an inverse gamma distribution.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @param options - stream options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.invgamma( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.invgamma;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.invgamma.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.invgamma.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.invgamma.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	invgamma: typeof invgamma;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @param options - stream options
	* @throws `a` must be a positive number
	* @throws `b` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.kumaraswamy( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.kumaraswamy;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.kumaraswamy.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.kumaraswamy.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.kumaraswamy.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	kumaraswamy: typeof kumaraswamy;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Laplace (double exponential) distribution.
	*
	* @param mu - mean
	* @param b - scale parameter
	* @param options - stream options
	* @throws `b` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.laplace( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.laplace;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.laplace.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.laplace.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.laplace.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	laplace: typeof laplace;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Lévy distribution.
	*
	* @param mu - mean
	* @param c - scale parameter
	* @param options - stream options
	* @throws `c` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.levy( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.levy;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.levy.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.levy.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.levy.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	levy: typeof levy;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a logistic distribution.
	*
	* @param mu - mean
	* @param s - scale parameter
	* @param options - stream options
	* @throws `s` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.logistic( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.logistic;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.logistic.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.logistic.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.logistic.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	logistic: typeof logistic;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a lognormal distribution.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @param options - stream options
	* @throws `sigma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.lognormal( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.lognormal;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.lognormal.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.lognormal.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.lognormal.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	lognormal: typeof lognormal;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers via a linear congruential pseudorandom number generator (LCG) based on Park and Miller.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.minstd;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.minstd( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.minstd.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.minstd.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	minstd: typeof minstd;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers via a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.minstdShuffle;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.minstdShuffle( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.minstdShuffle.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.minstdShuffle.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	minstdShuffle: typeof minstdShuffle;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers via a 32-bit Mersenne Twister pseudorandom number generator.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.mt19937;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.mt19937( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.mt19937.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.mt19937.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	mt19937: typeof mt19937;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a negative binomial distribution.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @param options - stream options
	* @throws `r` must be a positive number
	* @throws `p` must be a probability
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.negativeBinomial( 20, 0.3, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.negativeBinomial;
	* var stream = new RandomStream( 20, 0.3, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.negativeBinomial.objectMode( 20, 0.3, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.negativeBinomial.factory( 20, 0.3, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.negativeBinomial.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 20, 0.3 ) );
	* }
	*/
	negativeBinomial: typeof negativeBinomial;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a normal distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @param options - stream options
	* @throws `sigma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.normal( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.normal;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.normal.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.normal.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.normal.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	normal: typeof normal;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Pareto (Type I) distribution.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @param options - stream options
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.pareto1( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.pareto1;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.pareto1.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.pareto1.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.pareto1.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	pareto1: typeof pareto1;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Poisson distribution.
	*
	* @param lambda - mean
	* @param options - stream options
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.poisson( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.poisson;
	* var stream = new RandomStream( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.poisson.objectMode( 0.7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.poisson.factory( 0.7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.poisson.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 0.7 ) );
	* }
	*/
	poisson: typeof poisson;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers having integer values.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.randi;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.randi( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.randi.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.randi.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	randi: typeof randi;

	/**
	* Returns a readable stream for generating pseudorandom numbers from a standard normal distribution.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.randn;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.randn( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.randn.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.randn.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	randn: typeof randn;

	/**
	* Returns a readable stream for generating a stream of uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.randu;
	* var stream = new RandomStream( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.randu( opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.randu.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.randu.objectMode( opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	randu: typeof randu;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Rayleigh distribution.
	*
	* @param sigma - scale parameter
	* @param options - stream options
	* @throws `sigma` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.rayleigh( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.rayleigh;
	* var stream = new RandomStream( 0.7, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.rayleigh.objectMode( 0.7, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.rayleigh.factory( 0.7, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.rayleigh.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 0.7 ) );
	* }
	*/
	rayleigh: typeof rayleigh;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Student's t distribution.
	*
	* @param v - degrees of freedom
	* @param options - stream options
	* @throws `v` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.ns.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.t( 2.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.ns.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.t;
	* var stream = new RandomStream( 2.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.t.objectMode( 2.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.t.factory( 2.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.t.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0 ) );
	* }
	*/
	t: typeof t;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a triangular distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - stream options
	* @throws arguments must satisfy `a <= c <= b`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.triangular( 2.0, 5.0, 4.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.triangular;
	* var stream = new RandomStream( 2.0, 5.0, 4.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.triangular.objectMode( 2.0, 5.0, 4.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.triangular.factory( 2.0, 5.0, 4.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.triangular.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0, 4.0 ) );
	* }
	*/
	triangular: typeof triangular;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a uniform distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - stream options
	* @throws `a` must be less than `b`
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.uniform( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.uniform;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.uniform.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.uniform.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.uniform.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	uniform: typeof uniform;

	/**
	* Returns a readable stream for generating a stream of pseudorandom numbers drawn from a Weibull distribution.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @param options - stream options
	* @throws `k` must be a positive number
	* @throws `lambda` must be a positive number
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.weibull( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var RandomStream = ns.weibull;
	* var stream = new RandomStream( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.weibull.objectMode( 2.0, 5.0, opts );
	*
	* stream.pipe( inspectStream.objectMode( log )  );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.weibull.factory( 2.0, 5.0, opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.weibull.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( 2.0, 5.0 ) );
	* }
	*/
	weibull: typeof weibull;
}

/**
* Pseudorandom number generator streams.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
