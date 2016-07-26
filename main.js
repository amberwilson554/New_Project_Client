New_Form = new Mongo.Collection('form');  // Table 

/////Setup routing.

Router.configure
({
   layoutTemplate: 'layout'
});

Router.route('/', function() 
{
    this.render('create');
});

Router.route('/list');

/////Helpers

Template.create.helpers
({
    create:function()
    {
      return New_Form.find({});
    }

});

Template.list.helpers
({
    list:function()
    {
      return New_Form.find({});
    }
});


/////Events

Template.list.events
({
    "click .delete-field" : function(event)
    {
        if(confirm('Delete Entry?'))
        {
            New_Form.remove(this._id);

    
        }

        return false;

    }
});


Template.create.events
({

   "submit .input-data" : function(event)
   {
 
	var t = event.target.Title.value;
	var u = event.target.URL.value;
	var d = event.target.Des.value;

	New_Form.insert({Title: t,URL: u,Description: d, CreatedAt: new Date()});
		
	event.target.Title.value = '';
 	event.target.URL.value = '';
 	event.target.Des.value = '';

	return false;
    }  
});





