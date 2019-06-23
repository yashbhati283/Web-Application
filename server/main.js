import { Meteor } from 'meteor/meteor';
import '../imports/collection.js';

Meteor.startup(function(){
    if (Images.find().count() == 0){
        for (var i=1;i<10;i++){
            Images.insert(
                {
                    img_src:"image"+i+".jpg",
                    img_alt:"image"+i,
                    label:'label'+i, description:'description'+i
                }
            );
        }
        console.log("Number of images: "+Images.find().count());
    }
});
