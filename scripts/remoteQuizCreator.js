(function (window) {
    'use strict';
    var App = window.App || {};

    function RemoteQuizCreator(url) {

        if (!url) {
            throw new Error('No remote URL supplied.');
            }
            this.serverUrl = url;
    }


    RemoteQuizCreator.prototype.add = function(key, data) {
        var collection = firebase.firestore().collection('questions');
        return collection.add(key, data);
    };

    // RemoteDataStore.prototype.add = function (key, val) {
    //     $.post(this.serverUrl, val, function(serverResponse){
    //         console.log(serverResponse);
    //     });
    // };

    // RemoteDataStore.prototype.getAll = function () {
    //     $.get(this.serverUrl, function (serverResponse) {
    //         console.log(serverResponse);
    //     });         
    // };

    // RemoteDataStore.prototype.get = function (key) {
    //     $.get(this.serverUrl + '/' + key, function (serverResponse) {
    //         console.log(serverResponse);
    //     });         
    // };


    // RemoteDataStore.prototype.remove = function (key) {
    //     $.ajax(this.serverUrl + '/' + key, {
    //         type: 'DELETE'
    //     });
    // };
        
    // RemoteDataStore.prototype.removeAll = function (key) {
    //     $.ajax(this.serverUrl, {
    //         type: 'DELETE'
    //     });
    // };
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
}) (window);