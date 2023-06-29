// pages/api/users.js

let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];
  
  export default function handler(req, res) {
    if (req.method === "GET") {
      // Obtener todos los usuarios
      res.status(200).json(users);
      
    } else if (req.method === "POST") {
      // Crear un nuevo usuario
      const { name } = req.body;
      const newUser = { id: Date.now(), name };
      users.push(newUser);
      res.status(201).json(newUser);
    } else if (req.method === "PUT") {
      // Actualizar un usuario existente
      const { id, name } = req.body;
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        users[userIndex].name = name;
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else if (req.method === "DELETE") {
      // Eliminar un usuario existente
      const { id } = req.body;
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.status(200).json(deletedUser[0]);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  