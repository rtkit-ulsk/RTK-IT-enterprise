lint-scripts:
	npx next lint
fix-scripts:
	npx next lint --fix

lint-styles:
	npx stylelint --color "**/*.css" 
fix-styles:
	npx stylelint --color --fix "**/*.css" 

lint-all: lint-scripts lint-styles

fix-all: fix-scripts fix-styles
