#include <iostream>
#include <vector>
#include <windows.h>  // for Sleep()
#include <conio.h>     // for _kbhit() and _getch()
using namespace std;

const int WIDTH = 10;
const int HEIGHT = 10;

class Bubble {
protected:
    int x, y;
    char color;

public:
    Bubble(int x, int y, char color) : x(x), y(y), color(color) {}

    virtual void display() const {
        cout << color;
    }

    int getX() const { return x; }
    int getY() const { return y; }
    char getColor() const { return color; }

    void setPosition(int nx, int ny) {
        x = nx;
        y = ny;
    }
};

class Shooter {
private:
    int x;

public:
    Shooter(int x = WIDTH / 2) : x(x) {}

    void moveLeft() {
        if (x > 0) x--;
    }

    void moveRight() {
        if (x < WIDTH - 1) x++;
    }

    Bubble shoot(char color) {
        return Bubble(x, HEIGHT - 1, color);
    }

    int getX() const { return x; }
};

class Game {
private:
    Bubble* board[WIDTH][HEIGHT];
    Shooter shooter;
    bool running = true;
    int score = 0;

    void clearScreen() {
        system("cls");
    }

    void printBoard() {
        clearScreen();
        cout << "Score: " << score << "\n\n";

        for (int y = 0; y < HEIGHT; ++y) {
            for (int x = 0; x < WIDTH; ++x) {
                if (board[x][y] != nullptr) {
                    board[x][y]->display();
                }
                else {
                    cout << '.';
                }
            }
            cout << "\n";
        }

        // Print shooter line
        for (int x = 0; x < WIDTH; ++x) {
            if (x == shooter.getX()) cout << '^';
            else cout << ' ';
        }
        cout << "\nUse 'a' and 'd' to move, 'r/g/b' to shoot, 'q' to quit\n";
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT;
    }

    void checkMatch(int x, int y, char color, vector<pair<int, int>>& matched, bool visited[WIDTH][HEIGHT]) {
        if (!isValid(x, y)) return;
        if (visited[x][y]) return;
        if (board[x][y] == nullptr || board[x][y]->getColor() != color) return;

        visited[x][y] = true;
        matched.push_back({ x, y });

        checkMatch(x + 1, y, color, matched, visited);
        checkMatch(x - 1, y, color, matched, visited);
        checkMatch(x, y + 1, color, matched, visited);
        checkMatch(x, y - 1, color, matched, visited);
    }

    void removeMatched(const vector<pair<int, int>>& matched) {
        for (const auto& p : matched) {
            int x = p.first;
            int y = p.second;
            delete board[x][y];
            board[x][y] = nullptr;
        }
        score += matched.size() * 10;
    }

public:
    Game() {
        for (int x = 0; x < WIDTH; ++x)
            for (int y = 0; y < HEIGHT; ++y)
                board[x][y] = nullptr;
    }

    void play() {
        while (running) {
            printBoard();

            if (_kbhit()) {
                char key = _getch();
                if (key == 'a') shooter.moveLeft();
                else if (key == 'd') shooter.moveRight();
                else if (key == 'q') running = false;
                else if (key == 'r' || key == 'g' || key == 'b') {
                    Bubble b = shooter.shoot(key);
                    moveBubbleUp(b);
                }
            }

            Sleep(100);
        }
    }

    void moveBubbleUp(Bubble& b) {
        while (b.getY() > 0) {
            int nextY = b.getY() - 1;
            if (board[b.getX()][nextY] != nullptr) break;
            b.setPosition(b.getX(), nextY);
            printBoardWithBubble(b);
            Sleep(50);
        }

        int fx = b.getX();
        int fy = b.getY();

        if (board[fx][fy] == nullptr)
            board[fx][fy] = new Bubble(fx, fy, b.getColor());

        // Match detection
        vector<pair<int, int>> matched;
        bool visited[WIDTH][HEIGHT] = { false };
        checkMatch(fx, fy, b.getColor(), matched, visited);
        if (matched.size() >= 3) {
            removeMatched(matched);
        }
    }

    void printBoardWithBubble(Bubble& temp) {
        clearScreen();
        cout << "Score: " << score << "\n\n";

        for (int y = 0; y < HEIGHT; ++y) {
            for (int x = 0; x < WIDTH; ++x) {
                if (x == temp.getX() && y == temp.getY()) {
                    cout << temp.getColor();
                }
                else if (board[x][y] != nullptr) {
                    board[x][y]->display();
                }
                else {
                    cout << '.';
                }
            }
            cout << "\n";
        }

        for (int x = 0; x < WIDTH; ++x) {
            if (x == shooter.getX()) cout << '^';
            else cout << ' ';
        }
        cout << "\n";
    }

    ~Game() {
        for (int x = 0; x < WIDTH; ++x)
            for (int y = 0; y < HEIGHT; ++y)
                delete board[x][y];
    }
};

int main() {
    Game g;
    g.play();
    return 0;
}
