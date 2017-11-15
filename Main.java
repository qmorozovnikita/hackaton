class Main {
    static int count = 0;

    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            Thread t = new Func();
            t.start();
            try {
                t.join();
            } catch (InterruptedException ex) {}
        }
    }

    public static class Func extends Thread {
        public void run() {
            try {
                sleep((int) Math.random() * 1000 + 1);
            } catch (InterruptedException ex) {}
            System.out.println(count * 2);
            count++;
        }

    }
}
