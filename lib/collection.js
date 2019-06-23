import { Mongo } from 'meteor/mongo';
Images = new Mongo.Collection("images");

Images.allow({
	update:function(userId, doc){
		console.log("testing security on image update");
		if (Meteor.user()){
			return true;
		} else {
			return false;
		}
	},

	insert:function(userId, doc){
		console.log("testing security on image insert");
		if (Meteor.user()){
			if (userId != doc.createdBy){
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}
	},
	remove:function(userId, doc){
		return true;
	}
})
