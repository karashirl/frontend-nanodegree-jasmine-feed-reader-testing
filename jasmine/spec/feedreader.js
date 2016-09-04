/*
 Project Name: Feed Reader Testing - Udacity Front-End Developer Nanodegree
 Description:  Use Jasmine to test Udacity's RSS feed reader application
 Author:       Udacity, Kara Anderson
 Date:         9/4/2016
*/

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests placed within the $() function since some may
 * require DOM elements. Want to ensure they don't run until
 * DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* Make sure the allFeeds variable has been defined
         * and is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loop through each feed in allFeeds object to ensure
         * URL is defined and is not empty.
         */
        function testURL(url) {
            it('have URLs', function() {
                expect(url).toBeDefined();
                expect(url).not.toBe('');
            });               
        }

        for(var i = 0; i < allFeeds.length; i++) {
            testURL(allFeeds[i].url);
        }

        /* Loop through each feed in allFeeds object to ensure
         * name is defined and is not empty.
         */
         function testName(name) {
            it('are named', function() {
                expect(name).toBeDefined();
                expect(name).not.toBe('');
            });               
        }

        for(var i = 0; i < allFeeds.length; i++) {
            testName(allFeeds[i].name);
        }

    });

    describe('The menu', function() {
        var body = $('body');
        menuIcon = $('.menu-icon-link');
        /* Ensure menu element is hidden by default. */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Ensure menu changes visibility when menu icon is clicked. */
        it('is opened when clicked', function() {
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        /* Ensure when loadFeed() completes, there is at least a single
         * .entry element within .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
       
        it('should have at least one entry', function() { 
          expect($('.feed .entry')).not.toEqual(0);
        });
    });

    describe('New Feed Selection', function() {
        var oldFeedTitle;
        var newFeedHeader;
        /* Ensure when new feed is loaded by loadFeed(), the content
         * changes.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeedTitle = $('.feed .entry h2').html();
                oldFeedHeader = $('h1.header-title').html();
                loadFeed(1, function(){
                    done();
                });
            });
        });

        it('has loaded new content', function() { 
            newFeedTitle = $('.feed .entry h2').html();
            newFeedHeader = $('h1.header-title').html();
            expect(newFeedTitle).not.toBe(oldFeedTitle);
            expect(newFeedHeader).not.toBe(oldFeedHeader);
        });
    });
}());
