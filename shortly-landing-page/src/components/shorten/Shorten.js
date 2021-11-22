import React, {useState, useEffect, useRef} from 'react';
import './Shorten.scss';

function Shorten() {
    const [links, setLinks] = useState([]);
    const [url, setUrl] = useState('');
    const urlInput = useRef();
    const errorMessage = useRef();

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (url === '') {
            errorMessage.current.innerText = 'Please add a link';
            urlInput.current.classList.add('input-error');
        } else {
            errorMessage.current.innerText = '';
            urlInput.current.classList.remove('input-error');
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const data = await response.json();
            const linkData = {
                shortLink: data.result.full_short_link,
                originalLink: data.result.original_link
            };
            setLinks([...links, linkData]);
            urlInput.current.value = '';
        }
    }

    const handleLinkCopy = (e) => {
        const buttons = document.querySelectorAll('.cta-link');
        buttons.forEach(button => {
            button.classList.remove('cta-link-copied');
            button.innerText = 'Copy';
        });
        e.target.classList.add('cta-link-copied');
        e.target.innerText = 'Copied!';
        navigator.clipboard.writeText(e.target.dataset.link);
    }

    const deleteLink = (e) => {
        const newLinks = links.filter(obj => obj.shortLink !== e.target.dataset.link);
        // To remove item before it goes to useEffect()
        if (newLinks.length === 0) {
            localStorage.removeItem('links');
        }
        setLinks(newLinks);
    }

    useEffect(() => {
        if (links.length === 0) {
            if (localStorage.getItem('links') !== null) {
                setLinks(JSON.parse(localStorage.getItem('links')));
            }
        } else {
            localStorage.setItem('links', JSON.stringify(links));
        }
    }, [links]);

    const linkElements = links.map(obj => {
        return(
            <div className="link-container" key={obj.shortLink}>
                <p className="original-link">{obj.originalLink}</p>
                <hr />
                <div className="short-link-container">
                    <p className="short-link">{obj.shortLink}</p>
                    <button className="delete-link" onClick={deleteLink} data-link={obj.shortLink}><span className="hidden"></span></button>
                </div>
                <button className="cta cta-link" onClick={handleLinkCopy} data-link={obj.shortLink}>Copy</button>
            </div>
        );
    });

    return (
        <div className="shorten">
            <form onSubmit={handleFormSubmit}>
                <div className="url-container">
                    <input type="url" name="user-url" id="user-url" placeholder="Shorten a link here..." onChange={handleInputChange} ref={urlInput} />
                    <p className="error-message" ref={errorMessage}></p>
                </div>
                <input type="submit" value="Shorten It!" />
            </form>
            {linkElements}
        </div>
    );
}

export default Shorten;
