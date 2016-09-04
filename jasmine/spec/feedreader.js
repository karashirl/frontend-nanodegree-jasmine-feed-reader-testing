/*
 Project Name: Feed Reader Testing - Udacity Front-End Developer Nanodegree
 Description:  Use Jasmine to test Udacity's RSS feed reader application
 Author:       Udacity, Kara Anderson
 Date:         9/4/2016
*/

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        function testURL(url) {
            it('have URLs', function() {
                expect(url).toBeDefined();
                expect(url).not.toBe(0);
            });               
        }

        for(var i = 0; i < allFeeds.length; i++) {
            testURL(allFeeds[i].url);
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         function testName(url) {
            it('are named', function() {
                expect(name).toBeDefined();
                expect(name).not.toBe(0);
            });               
        }

        for(var i = 0; i < allFeeds.length; i++) {
            testName(allFeeds[i].name);
        }

    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var body = $('body');
        menuIcon = $('.menu-icon-link');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect(body.css('transform')).not.toEqual('translate3d(0, 0, 0)');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('is opened when clicked', function() {
            menuIcon.trigger('click');
            expect(body.css('transform')).toEqual('none');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
       
        it('should have at least one entry', function() { 
          expect($('.feed .entry')).not.toEqual(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var oldFeedTitle;
        var newFeedHeader;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function(done) {
            oldFeedTitle = $('.feed .entry h2').html();
            oldFeedHeader = $('h1.header-title').html();
            loadFeed(1, done);
        });

        it('has loaded new content', function(done) { 
            newFeedTitle = $('.feed .entry h2').html();
            newFeedHeader = $('h1.header-title').html();
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedHeader).not.toBe(oldFeedHeader);
            done();
        });
    });
}());
