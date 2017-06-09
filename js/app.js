var MyApp = angular.module('MyApp', ['ngMaterial', 'ngAnimate']);


MyApp.run(function() {
    console.log('Running!');
});



MyApp.controller('appCtrl', ['$scope', '$timeout', function($scope, $timeout){

    
 

///////////////////////////////////////////////////////////////////////////////
// SWIPING LEFT/RIGHT
//////////////////////////////////////////////////////////////////////////////
    var restaurants = [
            {
              type: "italian food",
              name: "Wo Hop",
              description: "Founded in 1938, Wo Hop is Chinatown’s second oldest restaurant.",
              img: "coffe"
            },
            {
              type: "italian food",
              name: "Shalimar Pakistani",
              description: "This Indian Restaurant has a menu and a buffet that is a bit different than most.",
              img: "dinner"
            },
            {
              type: "indian food",
              name: "McDonalds",
              description: "Founded in 1938, Wo Hop is Chinatown’s second oldest restaurant.",
              img: "hamburger"
            },
            {
              type: "indian food",
              name: "Ted Fries",
              description: "This Indian Restaurant has a menu and a buffet that is a bit different than most.",
              img: "launch"
            },
            {
              type: "chinese food",
              name: "BurgerKing",
              description: "Founded in 1938, Wo Hop is Chinatown’s second oldest restaurant.",
              img: "toast"
            },
            {
              type: "chinese food",
              name: "Rio de Janeiro",
              description: "This Indian Restaurant has a menu and a buffet that is a bit different than most.",
              img: "coffe"
            },
            {
              type: "breakfast food",
              name: "Sampa",
              description: "Founded in 1938, Wo Hop is Chinatown’s second oldest restaurant.",
              img: "dinner"
            },
            {
              type: "breakfast food",
              name: "Pizzeria Baggio",
              description: "This Indian Restaurant has a menu and a buffet that is a bit different than most.",
              img: "hamburger"
            }        
    ];
    
    var randomNumber = Math.floor(Math.random() * restaurants.length);
    var currentRestaurant = restaurants[randomNumber];
    var cardLeftAnimationOut = 'animated slideOutLeft';
    var cardRightAnimationOut = 'animated slideOutRight';
    var cardLeftAnimationIn = 'animated slideInLeft';
    var cardRightAnimationIn = 'animated slideInRight';
    var restauranyKindAnimation = 'animated flipInX';
    

    var moveRight = function() {
      $('#cardFrame').addClass(cardRightAnimationOut);      
      $timeout(function() {
        $('#restaurantKind').addClass(restauranyKindAnimation);
        $scope.currentRestaurant = restaurants[randomNumber];
        $('#cardFrame').removeClass(cardRightAnimationOut);
        $('#cardFrame').addClass(cardRightAnimationIn);
        $timeout(function() {
          $('#restaurantKind').removeClass(restauranyKindAnimation);        
          $('#cardFrame').removeClass(cardRightAnimationIn);
          $('#cardFrame').removeClass(cardLeftAnimationIn);
          $('#cardFrame').removeClass(cardRightAnimationOut);
          $('#cardFrame').removeClass(cardLeftAnimationOut);
        },600);                
      }, 600);
    };

    var moveLeft = function() {
      $('#cardFrame').addClass(cardLeftAnimationOut);      
      $timeout(function() {
        $('#restaurantKind').addClass(restauranyKindAnimation);
        $scope.currentRestaurant = restaurants[randomNumber];
        $('#cardFrame').removeClass(cardLeftAnimationOut);
        $('#cardFrame').addClass(cardLeftAnimationIn);
        $timeout(function() {
          $('#restaurantKind').removeClass(restauranyKindAnimation);        
          $('#cardFrame').removeClass(cardRightAnimationIn);
          $('#cardFrame').removeClass(cardLeftAnimationIn);
          $('#cardFrame').removeClass(cardRightAnimationOut);
          $('#cardFrame').removeClass(cardLeftAnimationOut);
        },600);                
      }, 600);       
    };

    function swipeRight() {        
        if(randomNumber < restaurants.length -1) {
            randomNumber ++;
            moveRight();
            
        } else {
            randomNumber = 0;
            moveRight();
        }        
    }

    function swipeLeft() {
        if(randomNumber > 0) {
            randomNumber --;
            moveLeft();
        } else {
            randomNumber = restaurants.length -1;
            moveLeft();
        }
    }

    $scope.randomNumber = randomNumber;
    $scope.currentRestaurant = currentRestaurant;
    $scope.swipeRight = swipeRight;
    $scope.swipeLeft = swipeLeft;



///////////////////////////////////////////////////////////////////////////////
// OPENING ANIMATION
//////////////////////////////////////////////////////////////////////////////
    $scope.isOpen = false;   
    var firstPageAnimation = 'animated fadeOut';
    var mainPageAnimation = 'animated bounceInUp';
    var animationEnded = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $scope.toolbarsColor = "#F9A825";
    $scope.firstAnimation = "";
    $scope.turn = function() {
      $('#firstPart').addClass(firstPageAnimation);
      $timeout(function() {
        $scope.isOpen = !$scope.isOpen;
        $scope.toolbarsColor = "#FF5252";
        $('#mainPage, #id1, #id2').addClass(mainPageAnimation);
      },600);      
    };



}]);
