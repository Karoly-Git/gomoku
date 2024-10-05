import React from 'react';

export default function Developer() {
    return (
        <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '1rem', marginBottom: '0', marginTop: 'auto' }}>
            <p>
                <span style={{ marginRight: '0.5rem', fontSize: '1rem', color: '#AAAAAA' }}>
                    Created by
                </span>
                <a
                    style={{
                        color: '#AAAAAA',
                        textDecoration: 'underline',
                        fontSize: '1rem',
                        transition: 'color 0.2s',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.karolyhornyak.co.uk"
                    onMouseEnter={(event) => {
                        event.target.style.color = '#fff';
                    }}
                    onMouseLeave={(event) => {
                        event.target.style.color = '#AAAAAA';
                    }}
                >
                    Karoly Hornyak
                </a>
            </p>
        </div>
    );
}
