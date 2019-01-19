$(document).ready(function(){
	$(".submit").click(function(event){
		
		var email = $(".email").val();
		var subject = $(".subject").val();
		var message = $(".message").val();
		var statusElm = $(".status")
		statusElm.empty();
		
		if(!(email.includes("@") && email.includes("."))){
			event.preventDefault();
			statusElm.append("<div>Email invalid</div>");
		}else if(subject.length < 1){
			var conf = confirm("Send email with no subject?");
			if(!conf){
				event.preventDefault();
			}
		}else if(message.length < 1){
			event.preventDefault();
			statusElm.append("<div>Message is empty<div>");
		}else{
            alert("Email sent");
        }
	})
})
