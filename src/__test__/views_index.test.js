const request = require('supertest');
const app = require('../index'); // Importa el archivo de la aplicación Express
const Item = require('../models/Item');


jest.mock('../models/Item'); // Simula el modelo Item


describe('GET /', () => {
  it('should render the index view with form and posts', async () => {
    const mockItems = [{ name: 'Item 1', post: 'Post 1' }, { name: 'Item 2', post: 'Post 2' }];
    Item.find.mockResolvedValue(mockItems); // Simula el método find para devolver valores predefinidos
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Bienvenido a nuestro blog, deja tu nombre y un comentario!");
    expect(res.text).toContain('<form method="post" action="/item/add">');
    expect(res.text).toContain('<input type="submit" value="Add Post">');
    expect(res.text).toContain('<h4>Posts:</h4>');
  });
});
