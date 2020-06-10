define([
    'services/keymapper',
    'models/story'
], function($keymap){
    angular.module('ascii-wars')
        .controller('MenuController', Menu)
        .controller('GameContoller', Game);

    Game.$inject = ['$scope'];

    function Menu() {
        console.log('Menu loaded');
        this.title = 'ASCII WARS!';
    }

    function Game($scope) {
        console.log('New Game!');

        var game = this;

        game.history = [];
        game.history.current = game.history.length;
        game.stdin = '';
        game.room = {
            onFirstEntry: 'WTF?! :('
        };

        game.key = function(event) {
            // console.log(e.which);
            // $keymap.debug(event);
            var keypressed = $keymap.pressed(event.which);
            if( keypressed && game.controls.isMapped(keypressed) ) {
                game.controls[keypressed](event);
            }
        }

        game.execute = function(e) {
            console.log(game)
            if( game.stdin ) {
                game.history.push(game.stdin);
                game.history.current = game.history.length;
            }

            var command = game.stdin.split(' ');

            if( game.actions[command[0]] ) {
                game.actions[command[0]](command)
            }

            game.stdin = '';
        }

        game.controls = {
            isMapped: function(keypressed) {
                return typeof game.controls[keypressed] === 'function';
            },
            up: function() {
                if( --game.history.current < 0 ) {
                    game.history.current = 0;
                }
                console.info('history.back', game.history.current);
                game.stdin = game.history[game.history.current];
            },
            down: function() {
                if( ++game.history.current > game.history.length ) {
                    game.history.current = game.history.length;
                }
                console.info('history.forward', game.history.current);
                game.stdin = game.history[game.history.current];
            }
        }

        game.actions = {
            "/examine": function(command) {
                console.log()
            }
        }

        game.start = function(Story) {
            game.state = new Story();
            game.render(game.state.rooms.closet);

            console.debug(game);
        }

        game.render = function(room) {
            room.markup = $makeHtml(room.text);
            game.room = room;
            $scope.$apply();
        }

        require(['models/story'], game.start)
    }
});
