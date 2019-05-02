# Common bug found:

[1.](https://stackoverflow.com/questions/13708180/python-dev-installation-error-importerror-no-module-named-apt-pkg) `ModuleNotFoundError: No module named 'apt_pkg'` 

```bash
ls /usr/lib/python3/dist-packages/apt

ls /usr/lib/python3/dist-packages/apt_pkg.

cd /usr/lib/python3/dist-packages/

sudo ln -s apt_pkg.cpython-{36m,37m}-x86_64-linux-gnu.so
```

then update