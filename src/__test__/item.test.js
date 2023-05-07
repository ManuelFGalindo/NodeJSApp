const Item = require('../models/Item');

test('Item model should have correct schema', () => {
  const itemSchemaObj = Item.schema.obj;
  expect(itemSchemaObj).toHaveProperty('name');
  expect(itemSchemaObj.name).toEqual({
    type: String,
    required: true
  });
  expect(itemSchemaObj).toHaveProperty('post');
  expect(itemSchemaObj.post).toEqual({
    type: String,
    required: false
  });
  expect(itemSchemaObj).toHaveProperty('date');
  expect(itemSchemaObj.date.type).toBe(Date);
});