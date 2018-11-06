using DAL.Abstract;
using DAL.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace DAL.Concrete
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly DbContext _dbContext;
        protected readonly DbSet<T> _dbSet;

        public Repository(DbContext context)
        {
            _dbContext = context ?? throw new ArgumentException(nameof(context));
            _dbSet = _dbContext.Set<T>();
        }

        public T Single(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _dbSet;

            query = query.AsNoTracking();

            if (include != null)
            {
                query = include(query);
            }

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return query.FirstOrDefault();
        }

        public void Insert(T item)
        {
            _dbSet.Add(item);
        }

        public void Update(T item)
        {
            _dbSet.Update(item);
        }

        public void Delete(Expression<Func<T, bool>> predicate = null)
        {
            IQueryable<T> query = _dbSet;

            query = query.AsNoTracking();

            var item = query.Where(predicate).FirstOrDefault();

            if(item != null)
            {
                _dbSet.Remove(item);
            }
        }

        public T[] GetList(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _dbSet;

            query = query.AsNoTracking();

            if (include != null)
            {
                query = include(query);
            }

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return orderBy != null ? orderBy(query).ToArray() : query.ToArray();
        }

        public IPaginate<T> GetPaginatedList(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
            int index = 0,
            int size = 20)
        {
            IQueryable<T> query = _dbSet;

            query = query.AsNoTracking();

            if (include != null)
            {
                query = include(query);
            }

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return orderBy != null ? orderBy(query).ToPaginate(index, size) : query.ToPaginate(index, size);
        }

        public IPaginate<TResult> GetPaginatedList<TResult>(Expression<Func<T, TResult>> selector,
            Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
            int index = 0,
            int size = 20) where TResult : class
        {
            IQueryable<T> query = _dbSet;

            query = query.AsNoTracking();

            if (include != null)
            {
                query = include(query);
            }

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return orderBy != null ? orderBy(query).Select(selector).ToPaginate(index, size) : query.Select(selector).ToPaginate(index, size);
        }
    }
}
