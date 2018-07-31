import Notification from 'rc-notification'
import 'rc-notification/assets/index.css'

let notification = null;
Notification.newInstance({}, (n) => notification = n);

export function success(msg) {
	notification.notice({
		content: msg
	})
}

export function error(msg) {
	notification.notice({
		content: msg
	})
}
