"""Word Finder: finds random words from a dictionary."""

import random


class WordFinder:
    """Machine for finding random words from a list of words.

    >>> wf = WordFinder("words.txt")
    """

    def __init__(self, path):
        """Read list of words and reports # of items read."""

        word_file = open(path)

        self.words = self.parse(word_file)

        print(f"{len(self.words)} words read")

    def parse(self, word_file):
        """Parse word_file -> list of words."""

        return [w.strip() for w in word_file]

    def random(self):
        """Return a random word."""

        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments."""

    def parse(self, word_file):
        """Parse word_file -> list of words, skipping blanks/comments"""

        return [w.strip() for w in word_file if w.strip() and not w.startswith("#")]
