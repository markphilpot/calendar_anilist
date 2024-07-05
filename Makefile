.PHONY : lint format clean start

all: format lint

format:
	yarn format

lint:
	yarn lint

clean:
	rm -rf build *.log

start:
	zellij --layout ./layout.kdl
