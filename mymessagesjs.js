$(document).ready(function()
			{
			   $(function()
  	           {
  		          $("#a1").a1();
  	           });
				$("#btn1").click(function()
				{
					head=$("#put").val();
					msg=$("#cont").val();
					if(head.length==0 || msg.length==0)
					{
					alert("Enter valid information");
				    }
				    else
				    {
				    	var x="";
				    	$(".p1").remove();
				    	$("#put").val("");
					   $("#cont").val("");
				    
				      x="<h3>   "+ head+"</h3>  <p>   "+msg+"</p>";
				      $("#a1").append(x);

				    }
				});
				 $("#btn1").click(function a() 
  				{
    	      $("#a1").accordion("refresh");
             });
			});
