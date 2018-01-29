import {Big} from "big.js";

class Calculate {
	isNumber(item:string) {
		return !!item.match(/[0-9]+/);
	}

	operate(numberOne:string, numberTwo:string, operation:string) {
		const one = Big(numberOne);
		const two = Big(numberTwo);
		if (operation === '+') {
			return one.plus(two).toString();
		}
		if (operation === '-') {
			return one.minus(two).toString();
		}
		if (operation === 'x') {
			return one.times(two).toString();
		}
		if (operation === '÷') {
			return one.div(two).toString();
		}
		if (operation === '%') {
			return one.mod(two).toString();
		}
		throw Error(`Unknown operation '${operation}'`);
	}

	calculate(obj: any, buttonName: string) {
		if (buttonName === 'AC') {
			return {
				total: null,
				next: null,
				operation: null,
			};
		}

		if (this.isNumber(buttonName)) {
			if (buttonName === '0' && obj.next === '0') {
				return {};
			}
			// If there is an operation, update next
			if (obj.operation) {
				if (obj.next) {
					return { next: obj.next + buttonName };
				}
				return { next: buttonName };
			}
			// If there is no operation, update next and clear the value
			if (obj.next) {
				return {
					next: obj.next + buttonName,
					total: null,
				};
			}
			return {
				next: buttonName,
				total: null,
			};
		}

		if (buttonName === '.') {
			if (obj.next) {
				if (obj.next.includes('.')) {
					return {};
				}
				return { next: obj.next + '.' };
			}
			if (obj.operation) {
				return { next: '0.' };
			}
			if (obj.total) {
				if (obj.total.includes('.')) {
					return {};
				}
				return { total: obj.total + '.' };
			}
			return { total: '0.' };
		}

		if (buttonName === '=') {
			if (obj.next && obj.operation) {
				return {
					total: this.operate(obj.total, obj.next, obj.operation),
					next: null,
					operation: null,
				};
			} else {
				// '=' with no operation, nothing to do
				return {};
			}
		}

		if (buttonName === '+/-') {
			if (obj.next) {
				return { next: (-1 * parseFloat(obj.next)).toString() };
			}
			if (obj.total) {
				return { total: (-1 * parseFloat(obj.total)).toString() };
			}
			return {};
		}

		// Button must be an operation

		// When the user presses an operation button without having entered
		// a number first, do nothing.
		// if (!obj.next && !obj.total) {
		//   return {};
		// }

		// User pressed an operation button and there is an existing operation
		if (obj.operation) {
			return {
				total: this.operate(obj.total, obj.next, obj.operation),
				next: null,
				operation: buttonName,
			};
		}

		// no operation yet, but the user typed one

		// The user hasn't typed a number yet, just save the operation
		if (!obj.next) {
			return { operation: buttonName };
		}

		// save the operation and shift 'next' into 'total'
		return {
			total: obj.next,
			next: null,
			operation: buttonName,
		};
	}
}

export const calculator = new Calculate();