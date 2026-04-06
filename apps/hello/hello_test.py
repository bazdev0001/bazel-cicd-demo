import unittest
from hello import greet

class TestHello(unittest.TestCase):
    def test_greet(self):
        self.assertEqual(greet("World"), "Hello, World!")
    def test_greet_name(self):
        self.assertEqual(greet("Baz"), "Hello, Baz!")

if __name__ == "__main__":
    unittest.main()
