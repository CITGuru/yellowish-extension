
// Attach DDP to your local app
var ddp = new MeteorDdp("ws://localhost:3000/websocket");

// TEST CONNECTION IS MADE
ddp.connect().done(function() {
	console.log('Connected!');
});

/*Connect to App
ddp.connect().then(function(){
	console.log('Success');
	Subscribe to a publication - in this case I publish the collection 'posts' as 'all_posts'
	ddp.subscribe('all_posts');

	//Watch that collection
	ddp.watch('posts', function (changedDoc, message){

		if (message === "added")
			posts++;
		if (message === "removed")
			posts--;

		//Update the browser badge to show how many posts there are
		chrome.browserAction.setBadgeText({text: posts.toString()});
})
*/