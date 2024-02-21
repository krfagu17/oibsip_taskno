let result = document.getElementById('result');
        let expression = '';

        function appendValue(value) {
            expression += value;
            result.value = expression;
        }

        function clearResult() {
            expression = '';
            result.value = '';
        }

        function performCalculation(operator) {
            expression += operator;
            result.value = expression;
        }

        function calculateResult() {
            try {
                result.value = eval(expression);
            } catch (error) {
                result.value = 'Error';
            }
        }