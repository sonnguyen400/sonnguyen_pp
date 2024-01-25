import { useEffect, useRef, memo } from 'react';
const formula = {
    email: function (e) {
        return (message = 'Email is invalid') => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value) || message;
        };
    },
    exact: function (e) {
        return (reflect, message = 'Invalid value') => {
            return e.value === reflect || message;
        };
    },
    required: function (e) {
        return (message = 'This field could not be blank') => {
            return e.value.trim() !== '' || message;
        };
    },
    min: function (e) {
        return (min, message = `Min value is min`) => {
            return e.value >= min || message;
        };
    },
    max: function (e) {
        return (max, message = `Max value is max`) => {
            return e.value <= max || message;
        };
    },
};

function checkRule(inputField, rules) {
    let errText = inputField.querySelector('.errText');
    let input = inputField.querySelector('input');
    let message = undefined;
    for (var rule of rules) {
        if (rule.value) {
            message = formula[rule.rule](input)(rule.value);
        } else {
            message = formula[rule.rule](input)();
        }
        if (message !== true) break;
    }
    if (message !== true) {
        console.log(errText);
        errText.style.display = 'block';
        errText.innerHTML = message;
    } else errText.style.display = 'none';
    return message;
}
function Form({ children, ...props }) {
    const form = useRef();
    useEffect(() => {
        let inputElements = form.current.querySelectorAll('div[data-rule]');
        console.log(inputElements);
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

            inputRules.forEach((item) => {
                item.element.querySelector('input').addEventListener('blur', (e) => {
                    checkRule(item.element, item.rule);
                });
            });
            return () => {
                inputRules.forEach((item) => {
                    item.element.querySelector('input').removeEventListener('blur', (e) => {
                        checkRule(item.element, item.rule);
                    });
                });
            };
            // form.onSubmit = function (e) {
            //     e.preventDefault();
            //     inputRules.forEach(element => {
            //         checkRule(element.element, element.rule);
            //     })
            // }
        }
    }, []);

    return (
        <form ref={form} {...props}>
            {children}
        </form>
    );
}

export default memo(Form);
