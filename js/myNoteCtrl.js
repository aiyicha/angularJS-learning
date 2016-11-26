//¿ØÖÆÆ÷
app.controller("myNoteCtrl",function($scope){
	$scope.message="";
	$scope.left=function(){return 100-$scope.message.length}
	$scope.save=function(){alert("Note saved")}
	$scope.clear=function(){$scope.message=""}
	$scope.$watch("message",function(){
		if($scope.message.length>100){
			$scope.message = $scope.message.substring(0,100);
		}
	})
})
	
