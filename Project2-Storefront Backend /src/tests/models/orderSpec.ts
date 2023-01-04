import { order, orderStore } from '../../models/order';

const store = new orderStore()

describe("Order Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('create method should add a Order', async () => {
    const result = await store.create({
        id :4,
        user_id :1 ,
        status : "Active"
    });
    expect(result.id).toEqual(4);
  });

  it('index method should return a list of Orders', async () => {
    const result = await store.index("1");
    expect(result).not.toBeNull()
  });

  it('show method should return the correct Order', async () => {
    const result = await store.show("4","1");
    expect(result).not.toBeNull()
  });
});