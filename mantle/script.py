import os
import subprocess

def main():

    cwd = os.getcwd()
    dest_path = os.path.join(cwd, "frontend")
    os.chdir(dest_path)
    subprocess.run(["npm", "i"], shell=True)
    subprocess.run(["npm", "run", "start"], shell=True)


if __name__ == '__main__':
    main()