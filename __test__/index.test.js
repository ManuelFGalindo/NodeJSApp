const request = require('supertest');
const app = require('../index'); // Importa el archivo de la aplicación Express
const Item = require('../models/Item');

jest.mock('../models/Item'); // Simula el modelo Item

describe('App routes', () => {
  describe('GET /', () => {
    it('should render the index view with items', async () => {
      const mockItems = [{ name: 'Item 1', post: 'Post 1' }, { name: 'Item 2', post: 'Post 2' }];
      Item.find.mockResolvedValue(mockItems); // Simula el método find para devolver valores predefinidos
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toContain('Item 1');
      expect(res.text).toContain('Item 2');
    });
  });

  describe('POST /item/add', () => {
    it('should add a new item and redirect', async () => {
      const newItem = { name: 'Test Item', post: 'Test Post' };
      Item.prototype.save.mockResolvedValue(newItem); // Simula el método save para devolver un valor predefinido
      const res = await request(app).post('/item/add').send(newItem);
      expect(res.statusCode).toEqual(302); // Verifica que se redirige correctamente
      expect(Item.prototype.save).toHaveBeenCalled(); // Verifica que se llamó al método save
    });
  });
});