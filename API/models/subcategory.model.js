import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category name is required"],
    
    lowercase: true,
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true,"SubCategory name is required"],
    unique:true,
    lowercase: true,
    trim: true,
  },
  subcaticonnm: {
    type: String,
    required: [true,"SubCategory icon name is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('Subcategory_collection',SubCategorySchema);

export default SubCategorySchemaModel