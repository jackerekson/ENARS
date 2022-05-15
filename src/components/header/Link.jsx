import React from 'react'

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        //allowing the browser to open a new tab using ctrl click
        if(e.metaKay || e.ctrlKey){
            return
        }

        e.preventDefault()
        window.history.pushState({}, '', href)

        const navEvent= new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link
