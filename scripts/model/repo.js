(function(module) {

	var gitAccount = [];


	gitAccount.fetchInfo = function(data){
		$.ajax('https://api.github.com/user', {
			headers:{
				Authorization: 'token '+ gitToken
			}
		})
		.done(function(data){
			gitAccount = data;
			console.log(gitAccount)
			console.log(data);
			console.log("Reception of github info");
		});
	};

	gitAccount.postGit = function(data){
		$('entry').hide();

	}

	module.gitAccount = gitAccount;
})(window);

window.gitAccount.fetchInfo();
