import { useEffect, useRef, memo } from 'react';
const formula = {
    email: function (e) {
        return (message = 'Email is invalid') => {
            let result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value);
            return {
                name: e.name,
                value: result ? e.value : message,
                error: !result,
            };
        };
    },
    exact: function (e) {
        return (reflect, message = 'Invalid value') => {
            let result = e.value === reflect;
            return {
                name: e.name,
                value: result ? e.value : message,
                error: !result,
            };
        };
    },
    required: function (e) {
        return (message = 'This field could not be blank') => {
            let result = e.value.trim() !== '';
            return {
                name: e.name,
                value: result ? e.value : message,
                error: !result,
            };
        };
    },
    min: function (e) {
        return (min, message = `Min value is min`) => {
            let result = e.value >= min;
            return {
                name: e.name,
                value: result ? e.value : message,
                error: !result,
            };
        };
    },
    max: function (e) {
        return (max, message = `Max value is max`) => {
            let result = e.value <= max;
            return {
                name: e.name,
                value: result ? e.value : message,
                error: !result,
            };
        };
    },
    none: function (e) {
        return () => {
            return {
                error: false,
                name: e.name,
                value: e.value,
            };
        };
    },
    array: function (e) {
        return (name) => {
            return {
                error: false,
                name: name,
                value: [],
            };
        };
    },
    arrayFinish: function (e) {
        return () => {};
    },
};

function checkRule(inputField, rules) {
    let errText = inputField.querySelector('.errText');
    let input = inputField.querySelector('input');
    let name = inputField.getAttribute('name');
    let result = undefined;
    for (var rule of rules) {
        if (rule.value) {
            result = formula[rule.rule](input)(rule.value);
        } else {
            result = formula[rule.rule](input)();
        }
        if (result !== true) break;
    }
    if (errText && result.error) {
        errText.style.display = 'block';
        errText.innerHTML = result.value;
    } else if (errText) {
        errText.style.display = 'none';
    }
    return result.error ? false : { [result.name]: input.value };
}
function Form({ children, onSubmit, ...props }) {
    const form = useRef();
    useEffect(() => {
        let inputElements = form.current.querySelectorAll('div[data-rule]');
        if (inputElements && inputElements.length > 0) {
            const inputRules = Array.from(inputElements).map((element) => {
                let rules = element
                    .getAttribute('data-rule')
                    .split('|')
                    .map((rule) => {
                        rule = rule.split(/[()]/);
                        return {
                            rule: rule[0],
                            value: rule[1],
                        };
                    });
                return { element: element, rule: rules };
            });

            for (let item of inputRules) {
                if (item.rule !== 'none') {
                    item.element.querySelector('input').addEventListener('blur', (e) => {
                        checkRule(item.element, item.rule);
                    });
                }
            }
            form.current.addEventListener('submit', (e) => {
                e.preventDefault();
                let result = {};
                let isValid = true;
                for (let inputRule of inputRules) {
                    let value = checkRule(inputRule.element, inputRule.rule);
                    console.log(value);
                    if (value !== false) {
                        Object.assign(result, value);
                    } else isValid = false;
                }

                console.log('submit');
                if (isValid) {
                    onSubmit(result);
                }
            });
            return () => {
                inputRules.forEach((item) => {
                    item.element.querySelector('input').removeEventListener('blur', (e) => {
                        checkRule(item.element, item.rule);
                    });
                });
            };
        }
    }, []);

    return (
        <form ref={form} method="POST" {...props}>
            {children}
        </form>
    );
}

export default memo(Form);
