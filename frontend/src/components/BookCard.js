import React from 'react';

export default function BookCard({ book }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      width: 200,
      padding: 10,
      boxSizing: 'border-box'
    }}>
      <img src={book.cover_url} alt={book.title} style={{ width: '100%', height: 150, objectFit: 'cover' }} />
      <h3 style={{ fontSize: 18 }}>{book.title}</h3>
      <p style={{ margin: '5px 0', color: '#555' }}>{book.author}</p>
      <p style={{ fontSize: 14 }}>{book.description}</p>
      <p style={{ fontWeight: 'bold' }}>${book.price}</p>
    </div>
  );
}
