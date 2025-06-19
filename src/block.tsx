import React, { useEffect } from 'react';

interface BlockProps {
  title?: string;
  description?: string;
}

const Block: React.FC<BlockProps> = ({ title, description }) => {
  useEffect(() => {
    // Send completion event immediately since this is a content block
    const blockId = '6853aff9157dfa0de308d3af';
    window.postMessage({ type: 'BLOCK_COMPLETION', blockId, completed: true }, '*');
    window.parent.postMessage({ type: 'BLOCK_COMPLETION', blockId, completed: true }, '*');
  }, []);

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        {title || 'Lorem Ipsum Text'}
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '6px',
        border: '1px solid #ddd'
      }}>
        <p style={{
          color: '#555',
          fontSize: '16px',
          textAlign: 'justify',
          margin: '0'
        }}>
          {loremIpsum}
        </p>
      </div>
      
      <div style={{
        marginTop: '15px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        Character count: {loremIpsum.length} characters
      </div>
    </div>
  );
};

export default Block;