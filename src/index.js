import rootView from 'react-native-root-view';

class Toasty {
    success = (text, timeout) => {
        this.render('success', text, timeout);
    }

    error = (text, timeout) => {
        this.render('error', text, timeout);
    }

    warning = (text, timeout) => {
        this.render('warning', text, timeout);
    }

    neutral = (text, timeout) => {
        this.render('neutral', text, timeout);
    }

    render = (type, text, timeout = 2000) => {
        const toastId = rootView.set(showComponent(text, type, timeout), () => {});    
        setTimeout(() => {
            rootView.remove(toastId, () => {});
        }, timeout)
    }
}

export default new Toasty();