import React from 'react'

export default function Footer() {
    const current = new Date();
    const date = `${current.getFullYear()}`;
    return (

        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">Copyright &copy; {date}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
